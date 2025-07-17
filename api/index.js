const speakeasy = require('speakeasy');

export default function handler(req, res) {
  const token = speakeasy.totp({
    secret: 'VU52G3USPHZQODCL', // your new TOTP secret
    encoding: 'base32'
  });
  res.status(200).json({ code: token });
}
