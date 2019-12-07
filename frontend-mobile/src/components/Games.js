

const Games = ({ title, lits, navigation }) => { //setting the titals to pass down prop names from home screen
    if(!lists.length){
        return null;
    }

    return (<View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        <Text>{lits.length} results</Text>
        <FlatList
            horizontal={false}
            data={lists}
            keyExtractor={(lists) => result.lits}
            renderItem={({ item }) => {

                return (
                    <TouchableOpacity >
                        <View><Text>{item}</Text></View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    container: {
        marginBottom: 8,
        borderBottomColor: '#add8e6',  //Light blue
    }

});

export default Games;