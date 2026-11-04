interface User {
  name: string;
  role: string;
}

interface ApiResponce<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
}

const fetchUser = async (): Promise<User | undefined> => {
  try {
    const res = await fetch("/api/v1/aome-endpoint");

    const data = (await res.json()) as ApiResponce<User>;

    if (!res.ok || !data.success) {
      throw new Error(`Failed fetch user data:${data.message}`);
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("something went wrong");
    }
  }
};

const userData = await fetchUser();

if (userData) {
  console.log(userData.name);
}
