import { error as errorStore } from '../store.js'

export const validate = (vals, schema) => {
    let result = { success: true }
    try {
        schema.parse(vals)
        errorStore.set(false)
    }
    catch (error) {
        errorStore.set(JSON.parse(error)[0].message)
        result.success = false 
        result.error = JSON.parse(error)[0].message
    }
    return result 
}