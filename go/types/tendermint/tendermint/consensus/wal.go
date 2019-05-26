package consensus

import (
	"time"
)

type TimedWALMessage struct {
	Time time.Time  `json:"time"` // for debugging purposes
	Msg  WALMessage `json:"msg"`
}

type EndHeightMessage struct {
	Height int64 `json:"height"`
}

type WALMessage interface{}

type WAL interface {
}
