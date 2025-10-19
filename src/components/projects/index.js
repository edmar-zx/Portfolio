import React from "react";
import { Container } from "./styles";

import ItemProject from "../itemProject";

export default function Projects() {
    return (
        <Container>
            <ItemProject
                tag="Featured Project"
                title="Example Project"
                description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                icon="/icon-park-solid_click.svg"
                image="/ImageProject-1.png"
                gradients={true}
            />
            <ItemProject
                tag="Featured Project"
                title="Example Project"
                description="A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                icon="/icon-park-solid_click.svg"
                image="/ImageProject-2.png"
                reverse={true}
            />
        </Container>
    )
}