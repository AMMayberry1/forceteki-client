"use client";
import React from "react";
import { Grid2 as Grid } from "@mui/material";
import KarabastBanner from "./_components/_sharedcomponents/Banner/Banner";
import PublicGames from "./_components/HomePage/PublicGames/PublicGames";
import CreateGameForm from "./_components/_sharedcomponents/CreateGameForm/CreateGameForm";
import NewsColumn from "./_components/HomePage/News/News";

const Home: React.FC = () => {
	const mt = "17vh";
	return (
		<Grid
			container
			sx={{
				position: "relative", // To contain the absolutely positioned banner
				height: "100vh",
				overflow: "hidden", // Prevents overflow
			}}
		>
			{/* Banner positioned absolutely */}
			<KarabastBanner />

			{/* Main Content */}
			<Grid
				container
				size={4}
				sx={{
					justifyContent: "center",
					alignContent: "center",
					mt: mt,
				}}
			>
				<PublicGames />
			</Grid>
			<Grid
				container
				size={4}
				sx={{
					justifyContent: "center",
					alignContent: "center",
					mt: mt,
				}}
			>
				<CreateGameForm />
			</Grid>
			<Grid
				container
				size={4}
				sx={{
					justifyContent: "center",
					alignContent: "center",
					mt: mt,
				}}
			>
				<NewsColumn />
			</Grid>
		</Grid>
	);
};

export default Home;
