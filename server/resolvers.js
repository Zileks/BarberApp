const PostDate = require("./models/postDates");

const resolvers = {
  Query: {
    dates: () => PostDate.find(),
  },
  Mutation: {
    createDate: async (_, { barber, time, date, email, customer, phone }) => {
      const newDate = new PostDate({
        barber,
        time,
        date,
        email,
        customer,
        phone,
      });
      await newDate.save();
      return newDate;
    },
  },
};

module.exports = { resolvers };
