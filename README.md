
# E:D Tightbeam

This application is designed to be run alongside *Elite: Dangerous*.

It leverages the [Elite: Dangerous Journal Server](https://github.com/DVDAGames/elite-dangerous-journal-server) to broadcast Events
from the Journal in real-time across a WebSocket server that any client on your
local network can connect to.


## What's with the name?

In *the Expanse* book series, "[tightbeam](http://expanse.wikia.com/wiki/Transponder#Use_in_spacecraft_around_24th_century)"
communication is what allows a ship in space to communicate with other ships,
stations, etc.

This implementation is a bit different as any client can subscribe to the WebSocket
server, but each broadcast is sent directly between the server and a single client,
so it's sort of similar.


## Contributors

Check out the [guide to contributing](https://github.com/DVDAGames/ed-tightbeam/blob/master/CONTRIBUTING.md)
if you'd like to be a [contributor](https://github.com/DVDAGames/ed-tightbeam/graphs/contributors).


## Changelog

Check out the [CHANGELOG](https://github.com/DVDAGames/ed-tightbeam/blob/master/CHANGELOG.md) for details.


## Acknowledgements

- *Elite: Dangerous* is © 1984 - 2017 Frontier Developments plc.
- [Elite: Dangerous Community Developers](https://edcd.github.io/) for documentation
and discussions
