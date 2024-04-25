import { db } from "@/lib/db"

export const getAllTests = async () => {
  try {
    const tests = await db.test.findMany({})

    return tests
  } catch {
    return null
  }
}

export const getTestById = async (id: string) => {
  try {
    const test = await db.test.findUnique({
      where: { id },
    })

    return test
  } catch {
    return null
  }
}

export const getTestByName = async (name: string) => {
  try {
    const test = await db.test.findUnique({
      where: { testName: name },
    })

    return test
  } catch {
    return null
  }
}
