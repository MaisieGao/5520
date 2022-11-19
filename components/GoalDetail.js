import { View, Text, FlatList, Button, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { storage } from "../firebase/firebase-setup";
import { getDownloadURL, ref } from "firebase/storage";

export default function GoalDetails({ route }) {
  const [users, setUsers] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const goal = route.params.goalObject;

  useEffect(() => {
    const getImageURL = async () => {
      try {
        if (goal.uri) {
          const reference = ref(storage, goal.uri);
          const downloadImageURL = await getDownloadURL(reference);
          setImageURL(downloadImageURL);
        }
      } catch (err) {
        console.log("download image ", err);
      }
    };
    getImageURL();
  }, []);
  // console.log(route.params.goalObject.text)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          //status code is 200-299
          throw new Error("The fetch request failed");
        }
        // fetch was successful
        const data = await response.json();
        setUsers(data);
        // console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  const addUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          // convert JS object to JSON
          body: JSON.stringify({ name: "Neda" }),
        }
      );
      if (!response.ok) {
        throw new Error("post fetch faile");
      }
      //data is the result of successful post request
      const data = await response.json();
      console.log(data);
      setUsers((prevUsers) => [...prevUsers, data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>
        You are viewing details of {route.params.goalObject.text} goal
      </Text>
      {imageURL && (
        <Image source={{ uri: imageURL }} style={{ width: 100, height: 100 }} />
      )}
      <Button title="Add User" onPress={addUser} />
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}