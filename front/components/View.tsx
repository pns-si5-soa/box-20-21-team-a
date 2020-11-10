import React from 'react';
import Head from "next/head";
import {Container} from "@material-ui/core";

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

/*
return (
	<div>
		<Head>
			<script
				src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
				integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
				crossOrigin="anonymous"
			/>
			<script
				src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
				integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
				crossOrigin="anonymous"
			/>
			<script
				src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
				integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
				crossOrigin="anonymous"
			/>
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossOrigin="anonymous"
			/>
			<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
			<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
		</Head>
		<Container maxWidth="xl">{children}</Container>
	</div>
)*/
