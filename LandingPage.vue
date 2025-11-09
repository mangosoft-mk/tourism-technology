<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50">
    <!-- Navigation Bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <svg class="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
            </svg>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Discover Salzburg</h1>
          </div>
          <div class="hidden md:flex items-center gap-6">
            <a href="#places" class="text-gray-700 hover:text-green-600 transition-colors font-medium">Places</a>
            <a href="#flights" class="text-gray-700 hover:text-green-600 transition-colors font-medium">Flights</a>
            <a href="#hotels" class="text-gray-700 hover:text-green-600 transition-colors font-medium">Hotels</a>
            <a href="#ski" class="text-gray-700 hover:text-green-600 transition-colors font-medium">Ski Trips</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-yellow-100 via-green-50 to-teal-50 opacity-60"></div>
      <div class="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div class="absolute bottom-10 left-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center">
          <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Welcome to Salzburg
          </h1>
          <p class="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            The City of Mozart & Alpine Beauty
          </p>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience the magic of Salzburg, where baroque architecture meets breathtaking Alpine landscapes.
            From world-class ski resorts to historic landmarks, discover a destination for all seasons.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#places" class="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Explore Places
            </a>
            <a href="#hotels" class="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-600">
              Plan Your Stay
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Beautiful Places Section -->
    <section id="places" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4 text-gray-900">Beautiful Places</h2>
          <p class="text-xl text-gray-600">Discover the most stunning attractions in and around Salzburg</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Hohensalzburg Fortress -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-3xl shadow-xl mb-4 aspect-[4/3]">
              <img src="https://picsum.photos/seed/fortress/800/600" alt="Hohensalzburg Fortress" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Hohensalzburg Fortress</h3>
                <p class="text-sm text-gray-200">Medieval fortress with panoramic city views</p>
              </div>
            </div>
          </div>

          <!-- Mirabell Palace -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-3xl shadow-xl mb-4 aspect-[4/3]">
              <img src="https://picsum.photos/seed/palace/800/600" alt="Mirabell Palace Gardens" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Mirabell Palace & Gardens</h3>
                <p class="text-sm text-gray-200">Baroque palace with stunning formal gardens</p>
              </div>
            </div>
          </div>

          <!-- Hallstatt -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-3xl shadow-xl mb-4 aspect-[4/3]">
              <img src="https://picsum.photos/seed/hallstatt/800/600" alt="Hallstatt Village" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Hallstatt Village</h3>
                <p class="text-sm text-gray-200">Picturesque lakeside village, 1 hour away</p>
              </div>
            </div>
          </div>

          <!-- Getreidegasse -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-3xl shadow-xl mb-4 aspect-[4/3]">
              <img src="https://picsum.photos/seed/street/800/600" alt="Getreidegasse Street" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Getreidegasse</h3>
                <p class="text-sm text-gray-200">Historic shopping street & Mozart's birthplace</p>
              </div>
            </div>
          </div>

          <!-- Untersberg Mountain -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-3xl shadow-xl mb-4 aspect-[4/3]">
              <img src="https://picsum.photos/seed/mountain/800/600" alt="Untersberg Mountain" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Untersberg Mountain</h3>
                <p class="text-sm text-gray-200">Cable car to stunning Alpine peaks</p>
              </div>
            </div>
          </div>

          <!-- Werfen Ice Caves -->
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-3xl shadow-xl mb-4 aspect-[4/3]">
              <img src="https://picsum.photos/seed/caves/800/600" alt="Werfen Ice Caves" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-2">Werfen Ice Caves</h3>
                <p class="text-sm text-gray-200">World's largest ice cave system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Flights Section -->
    <section id="flights" class="py-20 px-6 bg-gradient-to-br from-yellow-50 to-green-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4 text-gray-900">Getting Here</h2>
          <p class="text-xl text-gray-600">Find the best flights to Salzburg Airport</p>
        </div>

        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-3xl font-bold mb-6 text-gray-900">Flight Information</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg text-gray-900">Salzburg Airport (SZG)</h4>
                    <p class="text-gray-600">Located just 4km from city center</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg text-gray-900">International Connections</h4>
                    <p class="text-gray-600">Direct flights from major European cities</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-bold text-lg text-gray-900">Quick Transfer</h4>
                    <p class="text-gray-600">Bus, taxi, or rental car to downtown in 15 minutes</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
                <h4 class="font-bold text-lg mb-3 text-gray-900">Popular Airlines</h4>
                <div class="flex flex-wrap gap-3">
                  <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow">Austrian Airlines</span>
                  <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow">Lufthansa</span>
                  <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow">Ryanair</span>
                  <span class="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow">EasyJet</span>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <h3 class="text-2xl font-bold mb-4">Search Flights</h3>
                  <p class="mb-6 text-green-100">Find the best deals for your trip to Salzburg</p>
                </div>

                <div class="space-y-4">
                  <a href="https://www.skyscanner.com/flights-to/szg/cheap-flights-to-salzburg.html" target="_blank" class="block w-full bg-white text-green-600 px-6 py-4 rounded-xl font-semibold text-center hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Search on Skyscanner
                  </a>
                  <a href="https://www.google.com/flights?q=flights+to+salzburg" target="_blank" class="block w-full bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-white/30 transition-all duration-300 border-2 border-white/50">
                    Google Flights
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hotels Section with AI Chat Link -->
    <section id="hotels" class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4 text-gray-900">Where to Stay</h2>
          <p class="text-xl text-gray-600">Discover the perfect accommodation for your Salzburg adventure</p>
        </div>

        <!-- AI Booking Assistant - Featured -->
        <div class="mb-12">
          <div class="bg-gradient-to-br from-green-500 via-teal-500 to-emerald-600 rounded-3xl shadow-2xl overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div class="p-12 text-white flex flex-col justify-center">
                <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  <span class="text-sm font-semibold">AI-Powered</span>
                </div>

                <h3 class="text-4xl font-bold mb-4">Smart Booking Assistant</h3>
                <p class="text-xl mb-6 text-green-50">
                  Let our AI assistant help you find the perfect vacation package for nearby destinations like Antalya.
                  Chat naturally about your preferences and get personalized recommendations.
                </p>

                <div class="space-y-3 mb-8">
                  <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-green-50">Natural conversation interface</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-green-50">Real-time package search</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-green-50">Personalized recommendations</span>
                  </div>
                </div>

                <div class="space-y-4">
                  <button @click="goToChat('')" class="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full flex items-center justify-center gap-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    Start Chatting Now
                  </button>

                  <!-- Quick Presets -->
                  <div class="text-center">
                    <p class="text-green-100 text-sm font-medium mb-3">Or try these quick options:</p>
                    <div class="grid grid-cols-2 gap-3">
                      <button @click="openModal('winter-ski', '⛷️ Winter Ski Trip', 'Plan your perfect ski vacation in Salzburg')" class="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
                        </svg>
                        Winter Ski Trip
                      </button>

                      <button @click="openModal('summer-lakes', '🏖️ Summer Lakes', 'Discover beautiful lakes near Salzburg')" class="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                        </svg>
                        Summer Lakes
                      </button>

                      <button @click="openModal('city-center', '🏛️ City Center', 'Explore Salzburg historic sites')" class="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                        </svg>
                        City Center
                      </button>

                      <button @click="openModal('antalya', '🌴 Antalya Turkey', 'Book your vacation to Antalya')" class="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                        </svg>
                        Antalya Turkey
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-12 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-64 h-64 mx-auto mb-6 relative">
                    <div class="absolute inset-0 bg-white/20 rounded-3xl animate-pulse"></div>
                    <svg class="absolute inset-0 w-full h-full text-white p-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                    </svg>
                  </div>
                  <p class="text-white text-lg font-medium">Powered by Google Gemini AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Traditional Hotel Booking Options -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Booking.com</h3>
            <p class="text-gray-600 mb-6">Browse thousands of hotels, apartments, and guesthouses in Salzburg</p>
            <a href="https://www.booking.com/city/at/salzburg.html" target="_blank" class="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
              Search Hotels
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Airbnb</h3>
            <p class="text-gray-600 mb-6">Find unique stays and experiences hosted by local Salzburgers</p>
            <a href="https://www.airbnb.com/s/Salzburg--Austria" target="_blank" class="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              Explore Stays
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Hotels.com</h3>
            <p class="text-gray-600 mb-6">Compare prices and enjoy rewards with every booking you make</p>
            <a href="https://www.hotels.com/de1471001/hotels-salzburg-austria/" target="_blank" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              View Deals
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Ski Trips Section -->
    <section id="ski" class="py-20 px-6 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551524164-687a55dd1126?w=1920')] bg-cover bg-center opacity-20"></div>
      <div class="absolute inset-0 backdrop-blur-sm"></div>

      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold mb-4">Alpine Ski Adventures</h2>
          <p class="text-xl text-blue-100">Experience world-class skiing in the Austrian Alps - All Seasons</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <!-- Winter Season -->
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-3xl font-bold">Winter Season</h3>
                <p class="text-teal-200">December - April</p>
              </div>
            </div>

            <p class="text-lg mb-6 text-teal-100">
              Experience premium skiing and snowboarding on perfectly groomed slopes with stunning alpine views.
            </p>

            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Over 200km of ski runs</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Modern lift systems</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Ski schools for all levels</span>
              </div>
            </div>
          </div>

          <!-- Summer Activities -->
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-3xl font-bold">Summer Activities</h3>
                <p class="text-yellow-200">May - November</p>
              </div>
            </div>

            <p class="text-lg mb-6 text-yellow-100">
              Enjoy hiking, mountain biking, and breathtaking alpine scenery during the warmer months.
            </p>

            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Mountain hiking trails</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Mountain bike parks</span>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Alpine cable car rides</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Popular Ski Resorts -->
        <div class="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
          <h3 class="text-3xl font-bold mb-8 text-center">Nearby Ski Resorts</h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <h4 class="text-xl font-bold mb-2">Ski Amadé</h4>
              <p class="text-green-200 mb-3">Austria's largest ski area</p>
              <p class="text-sm text-green-100">760km of slopes, 270 lifts</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
              </div>
              <h4 class="text-xl font-bold mb-2">Kitzsteinhorn Glacier</h4>
              <p class="text-teal-200 mb-3">Year-round skiing</p>
              <p class="text-sm text-teal-100">41km of slopes, guaranteed snow</p>
            </div>

            <div class="text-center">
              <div class="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 class="text-xl font-bold mb-2">Obertauern</h4>
              <p class="text-yellow-200 mb-3">Snow-sure alpine village</p>
              <p class="text-sm text-yellow-100">100km of slopes, 26 lifts</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <svg class="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
          </svg>
          <h3 class="text-2xl font-bold">Discover Salzburg</h3>
        </div>
        <p class="text-gray-400 mb-6">Your gateway to Alpine adventures</p>
        <p class="text-sm text-gray-500">© 2025 Discover Salzburg. Made with Vue.js and ❤️</p>
      </div>
    </footer>

    <!-- Trip Details Modal -->
    <TripDetailsModal
      :show="showModal"
      :trip-type="currentTripType"
      :trip-title="modalTitle"
      :trip-description="modalDescription"
      @close="closeModal"
      @submit="handleTripSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TripDetailsModal from './components/TripDetailsModal.vue'

interface TripDetails {
  startDate: string
  days: number
  adults: number
  children: number
  childrenAges: number[]
}

const emit = defineEmits<{
  navigate: [page: string, preset?: string]
}>()

const showModal = ref(false)
const currentTripType = ref('')
const modalTitle = ref('')
const modalDescription = ref('')

const openModal = (tripType: string, title: string, description: string) => {
  currentTripType.value = tripType
  modalTitle.value = title
  modalDescription.value = description
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const handleTripSubmit = (details: TripDetails) => {
  showModal.value = false

  const { startDate, days, adults, children, childrenAges } = details

  // Format dates for URLs
  const checkInDate = new Date(startDate)
  const checkOutDate = new Date(checkInDate)
  checkOutDate.setDate(checkOutDate.getDate() + days)

  const formatDate = (date: Date) => date.toISOString().split('T')[0]
  const formatDateBooking = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  if (currentTripType.value === 'antalya') {
    // For Antalya, use the chat with pre-filled info
    const childrenInfo = children > 0 ? ` and ${children} children (ages: ${childrenAges.join(', ')})` : ''
    const presetMessage = `I want a ${days}-night vacation package to Antalya, Turkey starting on ${formatDate(checkInDate)} for ${adults} adults${childrenInfo}.`
    emit('navigate', 'chat', presetMessage)
  } else {
    // For Salzburg trips, open booking and flight links in new tabs
    const bookingUrl = generateBookingUrl(currentTripType.value, formatDateBooking(checkInDate), formatDateBooking(checkOutDate), adults, children)
    const airbnbUrl = generateAirbnbUrl(formatDate(checkInDate), formatDate(checkOutDate), adults, children)
    const flightUrl = generateFlightUrl(formatDate(checkInDate), formatDate(checkOutDate))

    // Open all links
    window.open(bookingUrl, '_blank')
    setTimeout(() => window.open(airbnbUrl, '_blank'), 500)
    setTimeout(() => window.open(flightUrl, '_blank'), 1000)

    // Also show AI recommendations
    const childrenInfo = children > 0 ? ` and ${children} children` : ''
    const presetMessage = `I want to ${getTripDescription(currentTripType.value)} for ${days} days starting ${formatDate(checkInDate)} with ${adults} adults${childrenInfo}. Can you give me recommendations?`
    emit('navigate', 'chat', presetMessage)
  }
}

const getTripDescription = (tripType: string): string => {
  const descriptions: Record<string, string> = {
    'winter-ski': 'go on a winter ski trip to Salzburg',
    'summer-lakes': 'visit the beautiful lakes near Salzburg',
    'city-center': 'explore Salzburg city center and historic sites'
  }
  return descriptions[tripType] || 'plan a trip to Salzburg'
}

const generateBookingUrl = (tripType: string, checkIn: string, checkOut: string, adults: number, children: number): string => {
  const rooms = 1
  const cityMap: Record<string, string> = {
    'winter-ski': '-hotel-at-salzburg',
    'summer-lakes': '-hotel-at-salzburg',
    'city-center': '-hotel-at-salzburg'
  }
  const cityId = cityMap[tripType] || '-hotel-at-salzburg'

  return `https://www.booking.com/searchresults.html?ss=Salzburg%2C+Austria&checkin=${checkIn}&checkout=${checkOut}&group_adults=${adults}&group_children=${children}&no_rooms=${rooms}`
}

const generateAirbnbUrl = (checkIn: string, checkOut: string, adults: number, children: number): string => {
  const guests = adults + children
  return `https://www.airbnb.com/s/Salzburg--Austria/homes?checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}`
}

const generateFlightUrl = (departureDate: string, returnDate: string): string => {
  return `https://www.google.com/flights?q=flights+to+salzburg+on+${departureDate}+returning+${returnDate}`
}

const goToChat = (presetMessage: string) => {
  if (presetMessage) {
    emit('navigate', 'chat', presetMessage)
  } else {
    emit('navigate', 'chat')
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
