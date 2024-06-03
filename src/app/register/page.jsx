import Input from "@/app/components/Input";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
     <div className="bg-white px-16 pt-8 pb-12 mb-4">
      <h1 className="text-3xl mb-4 text-center">Register</h1>
      <form>
        <Input label="Name" id="name" type="text"/>
        <Input  label="Username" id="username"  type="text"/>
        <Input  label="Password" id="password"  type="password"/>
      </form>
      </div>
    </div>
  );
};

export default Login;
