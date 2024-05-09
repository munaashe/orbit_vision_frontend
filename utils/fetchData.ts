const baseURL: any = process.env.NEXT_PUBLIC_BASE_API_URL

export async function getAccountDetails() {
    const res = await fetch(`${baseURL}/account`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getProducts() {
    const res = await fetch(`${baseURL}/products`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

