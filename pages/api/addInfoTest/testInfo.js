import prisma from '../../../lib/prisma'

export default async function addInfo(req, res) {
	const testInfoJson = JSON.parse(req.body)
	const testInfo = await prisma.testInfo.create({
		data: testInfoJson,
	})
	res.json(testInfo)
}
