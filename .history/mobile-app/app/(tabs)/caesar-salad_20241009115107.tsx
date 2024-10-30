export default function Page() {
    return (
    <ScrollView style={makeItPretty.saladPage}>
            <Text className="mb-4 text-4xl underline decoration-red-500 hover:italic" style={makeItPretty.pageTitle}>Ceasar Salad from Best of Bridge (1980)</Text>
            <Text className="mb-8 text-2xl underline decoration-red-500 hover:italic" style={makeItPretty.pageTitle}>Ceasar Salad from Best of Bridge (1980)</Text>

            <InputForm 
                labelText="Let me know what you think of the recipe!"
@@ -57,6 +57,8 @@ const makeItPretty = StyleSheet.create({
    pageTitle: {
        fontFamily: 'SwankyandMooMoo',
        fontVariantCaps: 'all-small-caps',
        borderColor: 'blue',
        borderWidth: 1,
    },
    section: {
        borderWidth: 2, 