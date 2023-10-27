import * as yup from "yup";
import { EnumStatus } from "../../domain/enum/enumStatus";
import { Task } from "../../domain/entity/Task";
export const getAllTasksSquema = yup.object({
  done: yup
    .mixed<EnumStatus>()
    .notRequired()
    .transform((value) => {
      if (value === "y" || value === "n") {
        return EnumStatus[value as keyof typeof EnumStatus];
      }
      return EnumStatus["NOTDONE" as keyof typeof EnumStatus];
    }),
  orderBy: yup
    .string()
    .notRequired()
    // .of(
    //   yup.object({
    //     name: yup.string().notRequired(),
    //     done: yup
    //       .mixed<EnumStatus>()
    //       .notRequired()
    //       .transform((value) => {
    //         if (value === "DONE" || value === "NOTDONE") {
    //           return EnumStatus[value as keyof typeof EnumStatus];
    //         }
    //         return EnumStatus["NOTDONE" as keyof typeof EnumStatus];
    //       }),
    //   })
    // ),
});

export const taskIdValidation = yup.object({
  id: yup.string().required(),
});

export const postTaskSquema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  status: yup
    .mixed<EnumStatus>()
    .notRequired()
    .transform((value) => {
      if (value === "DONE" || value === "NOTDONE") {
        return EnumStatus[value as keyof typeof EnumStatus];
      }
      return EnumStatus["NOTDONE" as keyof typeof EnumStatus];
    }),
  userId: yup.string().required(),
});
