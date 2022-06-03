import { Request, Response } from "express";
import CreateCoursesService from "./CreateCoursesService";

export function createCourse(request: Request, response: Response) {
  CreateCoursesService.execute({
    name: "NodeJs",
    educator: "Dani",
    duration: 10,
  });

  return response.send();
}
