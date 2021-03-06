import { Entity, model, property } from '@loopback/repository';
import { StudentRef } from './student-ref.model';

@model()
export class Course extends Entity {
  @property({
    type: 'string',
    id: true
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    default: 'course-name',
  })
  name: string;

  @property.array(StudentRef)
  students?: StudentRef[];

  constructor(data?: Partial<Course>) {
    super(data);
  }
}
