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
      return res.status(404);
    }

    const endpointData = rows[0];

    const response = xmlbuilder.create({
      result: {
        has_error: 0,
        version: 1,
        endpoint: {
          host: endpointData.host,
          api_host: endpointData.api_host,
          portal_host: endpointData.portal_host,
          n3ds_host: endpointData.n3ds_host
        }
      }
    });
    
    res.type('application/xml');
    res.send(response.end({ pretty: true }));
});

module.exports = router;