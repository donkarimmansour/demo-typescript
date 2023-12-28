
const sleep = async (delay : number): Promise<number> => {

  return await new Promise((res, rej) => {

      setTimeout(() => { res(delay) }, delay);
 
    })
  
}


export default sleep