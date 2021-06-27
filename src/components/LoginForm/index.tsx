import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  OtherProps,
  useColorMode,
  useToast,
  Text,
  Link,
} from "@chakra-ui/react";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { useState } from "react";
import { FormEvent } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useAuth } from "src/hooks/useAuth";
import { Link as RouterLink, useHistory } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  initialEmail?: string;
  initialPassword?: string;
};

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const [loading, setLoading] = useState(false);
  const { signInWithEmailAndPassword } = useAuth();
  const { touched, errors, isValid, handleBlur, handleChange } =
    props;
  const { colorMode } = useColorMode();
  const toast = useToast();
  const history = useHistory();

  async function handleLoginButton(ev: FormEvent) {
    ev.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(
        props.values.email,
        props.values.password
      );
      toast({
        description: "Usuário logado com sucesso.",
        status: "success",
        isClosable: true,
      });
      history.push("/");
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        isClosable: true,
        duration: 9000,
      });
    }
    setLoading(false);
  }

  return (
    <Flex as={Form} gridGap={"1rem"} direction={"column"}>
      <FormControl isInvalid={errors.email && touched.email ? true : false}>
        <Input
          as={Field}
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="E-mail"
          bg={colorMode === "light" ? "white" : "black"}
          color={colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"}
          h={"3.125rem"}
          borderRadius={"0.5rem"}
          p={"0 1rem"}
          border={"1px solid"}
          w={"100%"}
        />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={errors.password && touched.password ? true : false}
      >
        <Input
          as={Field}
          id="password"
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
          onBlur={handleBlur}
          bg={colorMode === "light" ? "white" : "black"}
          color={colorMode === "light" ? "blackAlpha.800" : "whiteAlpha.800"}
          h={"3.125rem"}
          borderRadius={"0.5rem"}
          p={"0 1rem"}
          border={"1px solid"}
          w={"100%"}
        />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        variant={"app"}
        w={"100%"}
        mt={"1rem"}
        rightIcon={<FaSignInAlt />}
        isLoading={loading}
        onClick={handleLoginButton}
        disabled={!touched.email || !isValid || loading}
      >
        Login
      </Button>
      <Text
        fontSize={"0.875rem"}
        color={colorMode === "light" ? "blackAlpha.600" : "whiteAlpha.600"}
      >
        Ainda não é registrado?{" "}
        <Link as={RouterLink} to="/signup" color={"secondaryApp.500"}>
          Clique aqui
        </Link>
      </Text>
    </Flex>
  );
};

export const LoginForm = withFormik<LoginFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "Informe um e-mail";
    }
    if (!values.password) {
      errors.password = "A senha é requerida.";
    }
    if (values.password.length < 6) {
      errors.password = "A senha deve possuir mais de 6 caracteres.";
    }
    return errors;
  },

  handleSubmit: (values) => {
    // do submitting things
  },
})(InnerForm);
