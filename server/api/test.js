export default defineEventHandler( async(event) => {

    // handle query param
    const { name } = useQuery(event)

    // handle post data
    const { age } = await useBody(event)

    return {
        message: `Hello, ${name}! You are ${age} years old.`
    }
})