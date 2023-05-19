import { defineStore } from "pinia";

export const useAuthStore: any = defineStore("auth", () => {
  const config = useRuntimeConfig();
  const router = useRouter();
  const authUser = ref();

  const getUserprofile = computed(() => authUser.value);

  const setUser = (user: any) => {
    authUser.value = user;
  };

  const logIn = async (email: string, password: string) => {
    try {
      const data: any = await $fetch(`/dj-rest-auth/login/`, {
          method: "POST",
          baseURL: config.public.apiUrl,
        body: {
          email,
          password,
        },
      });
      if (data.access_token) {
        router.push("/dashboard");
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    const data: any = await $fetch(`/dj-rest-auth/logout/`, {
        method: "POST",
        baseURL: config.public.apiUrl,
    });
    if (data.detail) {
      router.push("/");
      authUser.value = "";
    }
  };

  const signUp = async (email: string, password1: string, password2:string) => {
    try {
      const data: any = await $fetch(`/dj-rest-auth/registration/`, {
          method: "POST",
          baseURL: config.public.apiUrl,
        body: {
          email,
          password1,
          password2
        },
      });
      if (data.access_token) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const data: any = await $fetch(`/dj-rest-auth/password/reset/`, {
          method: "POST",
          baseURL: config.public.apiUrl,
        body: {
          email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const authenticationByFacebook = async (email: string) => {
    try {
      const data: any = await $fetch(`/dj-rest-auth/facebook/`, {
          method: "POST",
          baseURL: config.public.apiUrl,
        body: {
          email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getUserprofile,
    logIn,
    logOut,
    signUp,
    resetPassword,
    authenticationByFacebook
  };
});
