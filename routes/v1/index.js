const { Router } = require('express');
const xmlbuilder = require('xmlbuilder');
const { pool } = require('../../database');
const router = Router();

router.get('/endpoint', async (req, res) => {
  const query = `
    SELECT host, api_host, portal_host, n3ds_host
    FROM endpoints
    LIMIT 1
  `;
  const { rows } = await pool.query(query);

  if (!rows || rows.length === 0) {
    return res.status(404).send('No endpoint found');
  }

  const endpointData = rows[0];

  const xmlObj = xmlbuilder.create('result', { version: '1.0', encoding: 'UTF-8' });
  xmlObj.ele('has_error', 0);
  xmlObj.ele('version', 1);

  const endpoint = xmlObj.ele('endpoint');
  endpoint.ele('host', endpointData.host);
  endpoint.ele('api_host', endpointData.api_host);
  endpoint.ele('portal_host', endpointData.portal_host);
  endpoint.ele('n3ds_host', endpointData.n3ds_host);

  const xmlString = xmlObj.end({ pretty: true });

  res.set('Content-Type', 'application/xml');
  res.set('Content-Length', Buffer.byteLength(xmlString));
  res.send(xmlString);
});

module.exports = router;