import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-flipbook',
  standalone: true, // Mark this as a standalone component
  imports: [CommonModule], // Import CommonModule here to access ngClass and other common directives
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.css']
})
export class FlipbookComponent {
  pages = [
    { 
      text: 'Dear Claudine,',
      imageUrl: 'assets/heart.png' 
    },
    { 
      text: 'I don’t think words can capture what you mean to me, but I’m going to try my best anyway because you deserve to know just how special you are. Every single day since we met, you’ve brought a light into my life that I didn’t even know I was missing. Somehow, even through a screen, I feel closer to you than I’ve ever felt to anyone else, and I can’t help but feel so lucky to have met you.',
      imageUrl: 'assets/8.gif' 
    },
    { 
      text: 'One of my favorite things about you is how you bring comfort into everything you do. I love how you dress in your oversized shirts, they’re so you. And they make you look adorable! It’s like they are part of your relaxed, beautiful spirit, and they remind me of how easy it is to feel at home when I’m talking to you. I love hearing about your cooking. Knowing you’re putting care into every dish makes me wish I could be right there beside you, watching you create anything out of simple ingredients.',
      imageUrl: 'assets/0.gif' 
    },
    { 
      text: 'One day, I hope I’ll get to taste all the delicious meals you showed me! And even though you say you can’t sing, I’ve been lucky enough to hear your voice, and trust me when I say, you can sing. There’s a soft, sweet melody to your voice that feels like it was meant to bring warmth to the world. When you sing, even just for a moment, I feel a little closer to you, like I’m listening to something only I get to experience. You bring music into my life in so many ways, and I’ll never forget.',
      imageUrl: 'assets/1.gif' 
    },
    { 
      text: 'It amazes me how talented you are, too. The fact that you used to write stories and share them with the world shows how much creativity you have inside you. You created whole worlds, characters, and emotions that others could step into and feel. I think that’s what I love about you, too — you’ve invited me into this beautiful world of yours. Knowing that I get to be a part of your life, your story, makes me so happy. You’re inspiring, and you should never stop dreaming or creating.',
      imageUrl: 'assets/2.gif' 
    },
    { 
      text: 'The world needs people like you. And then there’s this gentle side of you, kindness that shines through everything you do. I can feel it every time you check in on me, say goodnight, or tell me that you’re proud of me. You make me feel valued and appreciated, and you’ve helped me see myself in a new light. I feel like I’m a better person because of you. You bring out a side of me that I didn’t even know existed — a side that wants to take care of you and make you feel just as loved and valued as you’ve made me feel.',
      imageUrl: 'assets/3.gif' 
    },
    { 
      text: 'I have to tell you, one of the moments I treasure most is when you’re just waking up. You always look so peaceful when you sleep, and then there’s that moment when you open your eyes, its like a spark lights up the room, even through a screen. I can’t help but smile, every single time. I don’t even realize I’m doing it. You’re like the first light of morning, beautiful and calming, and I could stay in that moment forever.',
      imageUrl: 'assets/her.jpg' 
    },
    { 
      text: 'When I imagine the future, it’s all those little moments. I can see us lauging together, maybe even taking a lazy afternoon nap (since I know how much you love your sleeping hehe), or cooking a meal side by side, or visiting different places. I imagine being the one who gets to say good morning and good night to you in person, to hear your voice first thing in the morning, and to look into your beautiful eyes without any screen in between us. I’m holding onto that, and I can’t wait for the day it becomes a reality.',
      imageUrl: 'assets/5.gif' 
    },
    { 
      text: 'Until then, I want you to know that you’re always on my mind, no matter how far apart we may be. I’m so proud of you, of everything you do, and of who you are. You’ve made my life brighter and happier, and I’ll spend every day grateful that we found each other. You’re the only one in my heart.',
      imageUrl: 'assets/6.gif' 
    },
    { 
      text: 'Ikaw ang kaligayahan ko, at hinding-hindi ko ipagpapalit ang nararamdaman ko para sa’yo. Lagi kitang iniisip, at kahit gaano pa kalayo ang pagitan natin, lagi kang nasa puso ko.',
      imageUrl: 'assets/7.gif' 
    },
    { 
      text: '... Martin <3',
      imageUrl: 'assets/me.jpg' 
    },
    { 
      text: 'This...',
      imageUrl: 'assets/her_text.jpg' 
    },
    { 
      text: '...',
      imageUrl: 'assets/my_text.jpg' 
    }
  ];

  currentPageIndex = 0;

  nextPage() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex += 1;
    }
  }

  prevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex -= 1;
      //test
    }
  }

  getPageClass(pageIndex: number) {
    return this.currentPageIndex === pageIndex ? 'flip' : '';  // Dynamically return 'flip' class
  }
}
