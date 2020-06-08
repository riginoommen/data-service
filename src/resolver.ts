import { Data } from './schema';
import { pubsub } from './helpers';
const ADD = 'ADD';
const MODIFY = 'MODIFY';
const REMOVE = 'REMOVE';

export const DataResolver = {
  Subscription: {
    add: {
      subscribe: () => pubsub.asyncIterator(ADD)
    },
    modify: {
      subscribe: () => pubsub.asyncIterator(MODIFY)
    },
    remove: {
      subscribe: () => pubsub.asyncIterator(REMOVE)
    }
  },
  Query: {
    // queries
    list(root: any, args: any, ctx: any) {
      return [{message: 'GET API for Data microservice'}];
    },
    get(root: any, args: any, ctx: any) {
      // fetch the id from args.id
      return {message: 'GET by ID API for Data microservice'};
    }
  },
  Mutation: {
    // mutations
    create(root: any, args: any, ctx: any) {
      const response = { message: 'POST API for Data microservice' };
    /* Optional: if you want to send graphql subscription updates when this query is called) */
      pubsub.publish(ADD, { add: response });
      return response;
    },
    update(root: any, args: any, ctx: any) {
      const response = { message: 'PUT API for Data microservice' };
      /* Optional: if you want to send graphql subscription updates when this query is called) */
      pubsub.publish(MODIFY, { modify: response });
      return response;
    },
    delete(root: any, args: any, ctx: any) {
      const response = { message: 'DELETE API for Data microservice' };
      /* Optional: if you want to send graphql subscription updates when this query is called) */
      pubsub.publish(REMOVE, { remove: response });
      return response;
    }
  }
}
