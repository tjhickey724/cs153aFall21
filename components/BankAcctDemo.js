/*
    Bank Account Demo
    This shows how to import a Javascript package and then use it
    in a ReactNative App.
    The one point to observe is that component will only be drawn if
    the state changes, so you need to use the imported BankAccount class
    to update some state variable that appears on the page somewhere.
*/
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import BankAccount, { transfer } from '../lib/BankAccount';


// const App = () => {...}
export default function App() {
  let [acct1,setAcct1] = useState(new BankAccount(1000))
  let [acct2,setAcct2] = useState(new BankAccount(2000))
  let [bal1,setBal1]= useState(acct1.balance)
  let [bal2,setBal2]= useState(acct2.balance)
  let [hiddenChange,setHiddenChange] = useState(0)
  let [transferAmount,setTransferAmount] = useState(100)




  useEffect(()=>{
    // create the two bank accounts
    // let a1 = new BankAccount(1000)
    // let a2 = new BankAccount(2000)
    // // store them in state variables
    // setAcct1(a1)
    // setAcct2(a2)
    // update the balance state from the account state
    //setBal1(acct1.balance)
    //setBal2(acct2.balance)

  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
          Bank Account Demo
      </Text>
      <Text>
        Acct 1 is  {acct1.balance}
      </Text>
      <Text>
        Acct 2 is {acct2.balance}
      </Text>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <Button
            title="transfer"
            onPress={() => {
                    transfer(acct1, acct2, parseFloat(transferAmount))
                    //setBal1(acct1.balance)
                    //setBal2(acct2.balance)
                    setHiddenChange(1-hiddenChange)
            }} />
            <TextInput
                value={transferAmount}
                style={{backgroundColor:'lightgreen'}}
                onChangeText={(text) => setTransferAmount(text)}
             />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize:32,
    padding:25,
    color:"red",
    backgroundColor:'black',
  }
});
