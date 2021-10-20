import { NextApiRequest, NextApiResponse } from 'next'

export default function getAllStudioInfo(req, res) {
	res.json({ hello: 'world', method: req.method })
}
