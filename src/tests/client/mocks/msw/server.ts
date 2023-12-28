import { setupServer } from 'msw/node'
import handlers from './handlers/index'

// This configures a request mocking server with the given request handlers.
// declare which API requests to mock

export const server = setupServer(...handlers)