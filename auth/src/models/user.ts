import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserAttrs>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const buildUser = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserAttrs>("User", userSchema);

export { User, buildUser };
