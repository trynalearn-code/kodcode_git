import {createTaskRepository} from "taskRepository.js"
import assert from "node:assert/strict"
import { describe, it } from "node:test"

describe("createTaskRepository", ()=>{
    it("correctly creates task", ()=>{
        const repo = createTaskRepository()
        assert.deepStrictEqual(repo.create({
    title: "Do homework"}), {
    id: 1,
    title: "Do homework",
    status: "pending"
})
    })
    it("trims the title", ()=>{
        const repo = createTaskRepository()
        assert.deepStrictEqual(repo.create({
    title: "    Do homework    "}), {
    id: 1,
    title: "Do homework",
    status: "pending"
})
    })
    it("tests a custom status", ()=>{
        const repo = createTaskRepository()
        assert.deepStrictEqual(repo.create({
    title: "Do homework", status:"done"}), {
    id: 1,
    title: "Do homework",
    status: "done"
})
    })
    it("throws an error when empty", ()=>{
        const repo = createTaskRepository()
        assert.throws(() =>
        repo.create({}), {message:"Title is required"})
    })
})