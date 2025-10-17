import React from "react";
import { Container, TextTop } from "./styles";
import { BoxText } from "../home/styles";
import ItemProject from "../itemProject";

export default function Projects() {
    return (
        <Container>
            <ItemProject
                tag="Featured Project"
                title="Example Project"
                description="A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed audio
                information about each track. Create and save new playlists of
                recommended tracks based on your existing playlists and more."
                icon="/icon-park-solid_click.svg"

            />
            
        </Container>
    )
}