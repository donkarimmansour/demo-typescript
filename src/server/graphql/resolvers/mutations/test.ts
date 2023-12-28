import { GraphQLError } from "graphql";
// import StatusCodes from "../../../common/statusCodes.json";





// : GraphQLContext
// : Promise<Array<MessagePopulated>>

const createTest = async (_: any, args: { name: string }) => {
  
  // const { name } = args;

  // if (!name) {
  //   throw new GraphQLError('Please enter your name.', { extensions: { code: 'BAD_USER_INPUT', http: { status: 400 }} });
  // }

  // try {

  //   const Test = await context.prisma.createTest({ name })

  //   return {
  //     data: Test,
  //     status: StatusCodes[200].code,
  //     msg: "SUCCESS"
  //   }


  // } catch (error) {
  //   return {
  //     data: null,
  //     status: StatusCodes[400].code,
  //     msg: "Failed"
  //   }
  // }

}

export default createTest
