import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      region: "ap-southeast-1",
      userPoolId: "ap-southeast-1_Ngu6rdIDT",
      userPoolClientId: "e1vp73pnltfenilf5aund9rme",
    }
  }
});