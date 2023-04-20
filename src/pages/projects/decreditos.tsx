import * as React from 'react'

import Layout from '../../components/Layout/Layout'

import Hero from '../../components/Sections/SuccesCases/Decreditos/Hero'
import Goal from '../../components/Sections/SuccesCases/Decreditos/Goal'
import Challenges from "../../components/Sections/SuccesCases/Decreditos/Challenges";
import Built from "../../components/Sections/SuccesCases/Decreditos/Built";
import Results from "../../components/Sections/SuccesCases/Decreditos/Results";
import WeDoIt from "../../components/Sections/SuccesCases/Decreditos/WeDoIt";
import ProjectSummary from "../../components/Sections/SuccesCases/Decreditos/ProjectSummary";
import Project from "../../components/Sections/SuccesCases/Decreditos/Project";

const DecreditosPage = () => {
    return (
        <Layout>
            <Hero />
            <Goal />
            <Challenges />
            <Built />
            <Results />
            <WeDoIt />
            <ProjectSummary />
            <Project />
        </Layout>
    )
}

export default DecreditosPage
