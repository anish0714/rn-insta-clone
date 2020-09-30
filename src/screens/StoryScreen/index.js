import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  View,
  TextInput,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import storiesData from '../../data/stories';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

//Components
import ProfilePicture from '../../components/ProfilePicture';

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;
  console.log(userId);
  const [userStories, setUserStories] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  useEffect(() => {
    const getUserStories = storiesData.find(
      (storyData) => storyData.user.id === userId,
    );
    setUserStories(getUserStories);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      //  navigateToPrevUser();
      return;
    }

    if (userStories && activeStoryIndex >= userStories.stories.length) {
      setActiveStoryIndex(userStories.stories.length - 1);
      //   navigateToNextUser();
      return;
    }

    if (userStories && userStories.stories.length > activeStoryIndex - 1) {
      setActiveStory(userStories.stories[activeStoryIndex]);
      return;
    }
  }, [activeStoryIndex]);
  // console.log(userStories);

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };
  const navigateToPrevUser = () => {
    navigation.navigate('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  const handleStoryPress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    //let isRight = true;
    if (x < screenWidth / 2) {
      //  isRight = false;
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  const handleNextStory = () => {
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={(evt) => handleStoryPress(evt)}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.backgroundImage}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.userPostedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Feather name="camera" size={25} color="white" />
            <TextInput
              placeholder="Send Message..."
              placeholderTextColor="white"
              style={styles.textInput}
            />
            <Ionicons name="paper-plane" size={25} color="white" />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
  },
  userPostedTime: {
    color: 'gray',
    fontWeight: '800',
    fontSize: 15,
    marginLeft: 10

  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  textInput: {
    borderWidth: 2,
    width: '80%',
    borderRadius: 50,
    borderColor: 'white',
    color: 'white',
    fontSize: 18,
  },
});
