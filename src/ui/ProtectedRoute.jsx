import styled from "styled-components";
import { useUser } from "../services/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1 Load authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //2 if NO authenticated user redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3 while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        {" "}
        <Spinner />
      </FullPage>
    );
  //4 if there IS a user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
