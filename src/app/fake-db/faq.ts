export class FaqFakeDb
{
    public static data = [
        {
            'question': 'Is this application decentralized?',
            'answer': 'Yes, it is fully decentralized in that it relies on no servers - all communications are peer-to-peer, is not backed by any organization, is not registered under any state, and is fully in the public domain of all sentient beings. It is developed by a small group of developers and will never be a DAO (Decentralized Autonomous Organization) as voting is considered in violation of the NAP and large organizations largely require voting or hierarchies, yet the codebase is fully open and therefore can be easily forked and thus still decentralized.'
        },
        {
            'question': 'How does it maintain my privacy?',
            'answer': 'It uses TOR and I2P when communicating over the internet to ensure the destination IP addresses for requests are not associated with your IP address and encrypts all data with keys you generate and control maintained on your drives, never sent out. All code is fully open-sourced so that you or someone you trust can verify no back-doors were added. You have full control over the services (including network services) and can shut them down at any time if you believe they shouldn\'t be in use. If you\'re in a known jurisdiction not recognizing freedom of speech, I2P will not publish your IP address to its shared database (netDb - shared among many peers) thus keeping your use of I2P private - can be overridden manually either way.'
        },
        {
            'question': 'How does it help me resist being censored?',
            'answer': 'When using the app, if during its use of TOR it gets blocked, it will use I2P to route around the block. Same for I2P, it will use TOR. If both are blocked, it will try to use Bluetooth to route around the blocks. With no user base, Bluetooth is not yet a viable alternative unless the people within range of your bluetooth are using 1M5 and allow you to connect. Work is progressing on supporting LiFi (Light Fidelity) and the full radio spectrum to communicate over light and long distances with radio to get around internet censorship.'
        },
        {
            'question': 'How can I use this app?',
            'answer': 'Currently there are no installers so you must download the project from GitHub, build, and follow the directions on how to start it. It currently is an alpha version in constant flux so in no way ready for real-world usage. It\'s best started up in an IDE like IntelliJ and ran as a demo for input into development. It is expected to be ready for real-world testing by version 0.7.0. Eventually it is expected to be embedded in an operating system when implemented with Rust.'
        },
        {
            'question': 'Who are the primary users targeted?',
            'answer': 'All whom take their privacy seriously - this should be everyone.'
        },
        {
            'question': 'Will people be able to use this for unethical purposes?',
            'answer': 'This is a tool like any tool and can be used ethically or unethically like any tool.'
        },
        {
            'question': 'How much overhead comes with using many networks simultaneously?',
            'answer': 'This will depend on what and how many services are activated. Early versions are just using TOR, I2P, and Bluetooth Network Services in support of more application-based services. In these versions, TOR is primarily used for browsing and I2P for messaging. When TOR is blocked, I2P is used for relaying and vice-versa. When both are blocked, Bluetooth is attempted for relay. This requires very little overhead. Later versions with LiFi will see similar little overhead comparable to Bluetooth. It\'s not until we reach using a Full-Spectrum radio where overhead can go up, especially on battery usage for transmitting over longer distances. In these uses, additional power will likely be needed and will be addressed through recommended practices and additional hardware. If all sensors are running while integrating with Bitcoin, Monero, and Lightning local nodes, then we can expect a fair amount of overhead although this setup would be more likely on a desktop or powerful Raspberry Pi or Pi Farm. Hardware recommendations for each configuration will be provided.'
        },
        {
            'question': 'In the beginning 1M5 will be a small network. Does this make it more vulnerable starting out?',
            'answer': '1M5 relies on other privacy networks for routing so it will be as private as those networks from day one. Those networks are TOR and I2P primarily which are the leading networks to maintain your privacy.'
        },
        {
            'question': 'Can the developers of 1M5 censor the flow of information?',
            'answer': '1M5 developers just put code out in the public. Other developers can embed 1M5 in their products. 1M5 is not operated in any means by the developers creating the 1M5 software so no, it\'s not possible. Even if they did, the software is purely peer-to-peer meaning that any attempt to monitor the flow of information and/or attempt to divert or block information in the codebase would be obvious as it is 100% open source and visible to all.'
        },
        {
            'question': 'How will the gift money be used?',
            'answer': 'Primarily to fund development and support of the platform but also includes web site hosting fees and other fees associated with supporting the mission. The mission\'s roadmap lays out the work to be accomplished.'
        },
        {
            'question': 'What form of money do you accept as a gift?',
            'answer': 'Bitcoin (BTC). If interested, send a request to info@1m5.io with GIFT in subject line. An address will be generated and returned. Use the fingerprint below to verify the public key is valid if possible. It\'s recommended to use Bisq.network or Samourai wallet as they both use TOR. In the future, it is planned to support gifting directly in the 1M5 dapp.'
        },
        {
            'question': 'How can I contribute?',
            'answer': 'Currently the repository on 1M5 is under heavy development so forking and fixing something is not recommended as it\'s changing so rapidly. The best method to support it today is to contact the development group at info@1m5.io, discuss your background including any links to your past work if identity is not an issue, what you would like to work on, and what it would cost in BTC or XMR.'
        },
        {
            'question': 'Why originally implemented in Java?',
            'answer': 'Java is the \'Swiss-Army Knife\' of programming languages * Has two decades to flush out a strong virtual machine * Massive amount of code to choose from * One of the largest talent pools * OS independent * Leads in the number of progressive projects in development (with C/C++ being close in decentralized apps) * I2P (the foundational network) implemented in Java'
        },
        {
            'question': 'Why the change to Rust?',
            'answer': '1M5 is heavily networked and part of its targeted platforms are tiny electronics with limited resources and embedded within C/C++/Rust-implemented operating systems * It has innovative memory management * Gives you the power of C/C++ yet productive like Python * Mozilla has a great reputation * Most decentralized software is being written in C/C++ * C, C++, and Go were considered also but the first two don\'t have the desired memory protections and are often written in a very terse manner and the latter uses garbage collection (and Google\'s reputation is slipping) * Crustaceans are a great community * It\'s expected to dramatically reduce codebase size with far less objects yet still get the benefit of object-orientation * Can be compiled to most operating systems * Great selection of code in Crates.io * Doesn\'t require downloading a virtual machine prior to use * Oracle increasingly closing Java * Open source language from the beginning * Don\'t expect to need a large number of Rust developers ever * Can integrate with I2P via SOCKS, no need to use Java * Rust version of I2P was started * Consider Rust the replacement of C, C++, C#, Go, Java, and Python'
        },
        {
            'question': 'Why a custom SOA/EDA foundation?',
            'answer': 'Enterprise Service Buses (ESB) with affiliated Message-Oriented Middleware (MOM) are quite heavy in implementation and it\'s desired to keep the codebase as small as possible as it is desired to support DoT (Decentralization of Things) devices. Spring\'s module + integration support does not fully satisfy the requirements and brings much more than desired. The move to Rust solidified the need for a custom platform as none exist.'
        },
        {
            'question': 'Where are the Spring and Google libraries in the Java version?',
            'answer': 'To keep the codebase small with less attack surface, Spring, Google, and Apache libraries were avoided; minimal 3rd party libraries used.'
        },
        {
            'question': 'Why is routing so confusing?',
            'answer': 'Services are completely decoupled so that they can be orchestrated dynamically during real-time operations. This is accomplished using a dynamic routing stack contained in the envelope that is passed around. This is more complex than just calling a method of an object yet allows great flexibility in execution while virtually eliminating interface breakage down to data payload breaks - each service is responsible for handling what data comes in and versioning. When making a request for a service, the operation name, the payload expected by the service, and the results expected from the service need to be known prior to making the call. This will come with a future API to simplify many common calls.'
        },
        {
            'question': 'Codebase doesn\'t use advanced techniques. Is this old code?',
            'answer': 'The code is intentionally implemented to be as simple as possible: Generics and lambdas are avoided unless a big impact on design * Verbosity is chosen over small code size for visibility * Excessive verbosity in variable names is also avoided keeping variable names especially small when within very small scopes * Classes are designed based on cohesion/coupling not size; some classes can intentionally reach upwards of 1000 lines; the minimal number of objects with strong cohesion while supporting the right amount of coupling is a great desire to keep it simple'
        }
    ];
}
