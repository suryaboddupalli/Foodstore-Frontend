const RecipeValidation = (recipeData) => {
    var recipeErrors = ''
    if (!recipeData.recipeName) {
        recipeErrors = 'Please enter the recipe Name'
    } else if (!recipeData.Cost) {
        recipeErrors = 'Please enter the Cost'
    }
    return recipeErrors
}
export default RecipeValidation