const API_KEY ="SFymb05AiJ38VSJ3gYPVhla25vvTf5RqnhLCulXzXHRpqg0EhVQIu9xI"
const BASE_URL ="https://api.pexels.com/v1"


export const getPopularMovies = async()=>{
const response = await fetch(`${BASE_URL}/search?query=people`,{
    headers:{
        Authorization :`${API_KEY}`
    }
})
const data=await response.json();

return data.photos

}

export const SearchMovies = async(query)=>{
    const response = await fetch(`${BASE_URL}/search?query=${query}`,{
        headers:{
            Authorization : `${API_KEY}`
        }
    })
    const data=await response.json();
    
    return data.photos

    }