import Vue from 'vue'

// Controls
import AppButton from '@/components/UI/Controls/Button'
import AppInput from '@/components/UI/Controls/Input'
import AppTextArea from '@/components/UI/Controls/TextArea'

// UI
import Message from '@/components/UI/Message'
import Intro from '@/components/UI/Intro'

// Post
import PostsList from '@/components/Blog/PostsList'

Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)

Vue.component('Message', Message)
Vue.component('Intro', Intro)

Vue.component('PostsList', PostsList)

