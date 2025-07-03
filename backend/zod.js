
import zod from 'zod';
export const userregschema=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string(),

})

export const transactionschema=zod.object({
    toaccount:zod.string(),
    amount:zod.number(),
})