import React from 'react';
import Head from "next/head";
import { Container } from "@material-ui/core";

type Props = {
    children: JSX.Element;
};

export default function View ({ children }: Props) { 
	return (
			<div>
				<Head>
					
					<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
					<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
				</Head>
				<Container maxWidth="xl">{children}</Container>
			</div>
)}