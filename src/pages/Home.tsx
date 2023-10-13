import styled from "styled-components";

import { H2, Link, ParMd, SingleColumnLayout } from "@daohaus/ui";
import { HausAnimated } from "../components/HausAnimated";
import { StyledRouterLink } from "../components/Layout";

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>We are Silo Squad</H2>
      <HausAnimated />
      <ParMd style={{ marginBottom: "2.4rem" }}>
        We're building NFT DAO tooling so you can squad up with your community and get shit done.
      </ParMd>
      <LinkBox>
        <Link href="https://github.com/SiloHaus">Github</Link>
        <Link href="https://silo.gg/">Website</Link>
        <Link href="https://twitter.com/SiloSquad">Twitter</Link>
      </LinkBox>
    </SingleColumnLayout>
  );
};
