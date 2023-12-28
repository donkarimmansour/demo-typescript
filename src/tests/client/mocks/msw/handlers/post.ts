import { graphql, HttpResponse  } from 'msw'


const getPosts = graphql.query('/getPosts', ({ query }) => {
    
    console.log('Intercepted a "ListPosts" GraphQL query:', query)

    return HttpResponse.json({
        data: { id: "...", title: 'John', body: 'Maverick', updatedAt: '01/10/2023'} } 
    , { status: 200 })
      
})


const getPost = graphql.query('/getPosts', ({ variables }: { variables: { id: string } }) => {

        const { id } = variables
        
        console.log(variables);
    
        return HttpResponse.json({
            data: [
                { id: id, title: 'John', body: 'Maverick', updatedAt: '01/10/2023' },
                { id: id, title: 'John', body: 'Maverick', updatedAt: '01/10/2023' },
                { id: id, title: 'John', body: 'Maverick', updatedAt: '01/10/2023' }
            ]
        }, { status: 200 })
             
})


export default [ getPosts, getPost ]