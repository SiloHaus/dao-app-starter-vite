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
      <H2 style={{ marginBottom: "1rem" }}>We are Silo Squad</H2>
      <img src="https://cdn.discordapp.com/attachments/495385622354067468/1162518934407348244/Silo_Logo_02_Ring.png?ex=653c3b20&is=6529c620&hm=71bb8fc3b1e35dff0f476d3c35e7fbc34538ad0bac22cf4ede31780a0f32a492&" width="250" height="250"/>
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
