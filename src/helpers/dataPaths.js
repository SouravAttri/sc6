import { path } from "ramda"

export const competitions = path(["allDatoCmsCompetition", "nodes"])
export const posts = path(["allDatoCmsPost", "nodes"])
export const winners = path(["allDatoCmsWinner", "nodes"])
