import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, AsyncStorage } from 'react-native';

let UID234_object = {
  correct: 0,
  answered: 1
};



function Button(props) {
  const { onPress, title = 'Save',style } = props;

  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default function MathQuiz({n}) {

  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
  }
  const [ans,setAns]= useState("");
  const [decision,setDecision]=useState(null);
  const [result,setResult]=useState("waiting");
  const [debugTitle,setDebTitle] = useState("SHOW DEBUG INFO");
  const [responseText,setText] = useState(" ");
  const [checkstyle,setCheck] = useState(styles.check_button);
  const [checkTitle,setCheckTitle] = useState("CHECK ANSWER");

  const [n1,setN1] = useState(getRandomInt(n));
  const [n2,setN2] = useState(getRandomInt(n));
  const [correct, setCorrect] = useState(0);
  const [answered,setAnswered] = useState(0);
  const [percent,setPercent] = useState(0);

  UID234_object["correct"]=correct;
  UID234_object["answered"]=answered;

  function handleButton1(){
      if(checkTitle=="CHECK ANSWER"){
          check();
          setCheckTitle("NEXT QUESTION")
      }else{
          nextQ();
          setCheckTitle("CHECK ANSWER")
      }
  }

  function handleDebug(){
      return (
        <Text>
            x: {n1} <br/>
            y: {n2} <br/>
            answer: {ans} <br/>
            correct: {correct} <br/>
            answered: {answered} <br/>
            result: {result} <br/>
      </Text>);

  }


  function check(){
      console.log(n1+" * "+n2+" = "+ans+" ("+n1*n2+")")
      let dec=(ans==(n1*n2));
      setDecision(dec)
      setCheck(styles.debug_button);

      if((ans==(n1*n2))==true){
          setText("Correct!")
          setCorrect(correct+1);
      }else if(ans!=null && (ans!=(n1*n2))==true){
          setText("Sorry, answer was "+(n1*n2)+", try again!");
      }else{
          setText("");
      }

      setAnswered(answered+1);

      let v=(correct/answered)*100;
      if(answered===0){
          v=0;
      }
      setPercent(v);


  }

  function nextQ(){
    // change values
    setN1(getRandomInt(n));
    setN2(getRandomInt(n));
    setCheck(styles.check_button);
    setText("");
  }

  function debug(){
      if(debugTitle=="SHOW DEBUG INFO"){
          setDebTitle("HIDE DEBUG INFO");
      }else{
          setDebTitle("SHOW DEBUG INFO");
      }
  }



  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.header}>
              Math Quiz for numbers between 0 and {n}
          </Text>
      </View>
      <View>
            <Text style={styles.question}>
                  Calculate the product of the following two numbers:
            </Text>
      </View>
      <View >
          <Text style={styles.answer}>{n1} * {n2} = <TextInput
                placeholder="???"
                keyboardType="numeric"
                onChangeText={setAns}
                value={ans}
                style={styles.answer}
          /></Text>
      </View>

      <Text style={styles.response}>
        {responseText}
      </Text>
      <View>
            <Button
                title={checkTitle}
                color="green"
                style={checkstyle}
                onPress={handleButton1}
                />

                <Text>
                Correct:{correct} <br/>
                Answered: {answered} <br/>
                Percent Correct: {percent} %
                </Text>
      </View>
      <View>
            <Button
                title={debugTitle}
                color="green"
                style={styles.debug_button}
                onPress={debug}
                />

            {debugTitle=="HIDE DEBUG INFO" && <Text>
                x: {n1} <br/>
                y: {n2} <br/>
                answer: {ans} <br/>
                correct: {correct} <br/>
                answered: {answered} <br/>
                result: {result} <br/>
          </Text>}


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    fontSize:42,
    color:"blue",
  },
  question:{
    fontSize: 28,
  },
  answer: {
    fontSize: 32,
  },
  response: {
    fontSize:26,
    color:"red",
  },
  check_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  debug_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  }
  ,
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
