import { defineStore } from 'pinia'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore'

import { db } from '@/js/firebase'

const postsCollectionRef = collection(db, 'images' )
const postsCollectionQuery = query(postsCollectionRef)


export const useStorePosts = defineStore('storePosts',  {
  state: () => {
    return{
      posts: [

      ],
      postCount: 0    
    }
  },
  actions: {
    async getPosts() {
      onSnapshot(postsCollectionQuery, (querySnapshot) => {
        let result = []
        querySnapshot.forEach((doc) => {
          let item = {
            id: doc.id,
            url: doc.data().url,
            title: doc.data().title,
            description: doc.data().description           
          }
          result.push(item)
        })

        this.posts = result
        this.postCount = result.length

      })

    },

    async storePost(postTitle, postDesc, postUrl) {

      await addDoc(postsCollectionRef, {
        title: postTitle,
        description: postDesc,
        url: postUrl
      })

    },
    async deletePost(idToDelete) {
      await deleteDoc(doc(postsCollectionRef, idToDelete))
    },

    async updatePost(id, postTitle, postDesc) {
      await updateDoc(doc(postsCollectionRef, id), {
        title: postTitle,
        description: postDesc
       
      })
    }
  },
  getters: {
    getPostCount: (state) => {
      return state.postCount
    },

    getPostContent: (state) => {
      return(id) => {
        return state.posts.filter(post => post.id === id)[0]
      }
    }
  }

 
})
