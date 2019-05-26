package common

type Error interface {
}

type cmnError struct {
	data       interface{}    // associated data
	msgtraces  []msgtraceItem // all messages traced
	stacktrace []uintptr      // first stack trace
}

var _ Error = &cmnError{}

type msgtraceItem struct {
	pc  uintptr
	msg string
}

type FmtError struct {
	format string
	args   []interface{}
}
