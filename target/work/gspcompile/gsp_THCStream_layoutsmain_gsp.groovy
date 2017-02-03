import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_THCStream_layoutsmain_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/layouts/main.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',4,['gsp_sm_xmlClosingForEmptyTag':(""),'http-equiv':("Content-Type"),'content':("text/html; charset=UTF-8")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',5,['gsp_sm_xmlClosingForEmptyTag':(""),'http-equiv':("X-UA-Compatible"),'content':("IE=edge,chrome=1")],-1)
printHtmlPart(1)
createTagBody(2, {->
createTagBody(3, {->
invokeTag('layoutTitle','g',6,['default':("Grails")],-1)
})
invokeTag('captureTitle','sitemesh',6,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',6,[:],2)
printHtmlPart(2)
invokeTag('createLink','g',7,['uri':("/")],-1)
printHtmlPart(3)
invokeTag('captureMeta','sitemesh',8,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("viewport"),'content':("width=device-width, initial-scale=1.0")],-1)
printHtmlPart(4)
expressionOut.print(assetPath(src: 'favicon.ico'))
printHtmlPart(5)
expressionOut.print(assetPath(src: 'apple-touch-icon.png'))
printHtmlPart(6)
expressionOut.print(assetPath(src: 'apple-touch-icon-retina.png'))
printHtmlPart(7)
invokeTag('stylesheet','asset',13,['src':("vendor.css")],-1)
printHtmlPart(1)
invokeTag('stylesheet','asset',14,['src':("application.css")],-1)
printHtmlPart(8)
invokeTag('javascript','asset',16,['src':("vendor.js")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',17,['src':("application.js")],-1)
printHtmlPart(8)
invokeTag('layoutHead','g',19,[:],-1)
printHtmlPart(9)
})
invokeTag('captureHead','sitemesh',20,[:],1)
printHtmlPart(9)
createTagBody(1, {->
printHtmlPart(10)
invokeTag('image','asset',26,['src':("logo.png")],-1)
printHtmlPart(11)
createClosureForHtmlPart(12, 2)
invokeTag('ifLoggedIn','sec',73,[:],2)
printHtmlPart(13)
createClosureForHtmlPart(14, 2)
invokeTag('ifAnyGranted','sec',77,['roles':("ROLE_CONTENT_MANAGER")],2)
printHtmlPart(15)
createTagBody(2, {->
printHtmlPart(16)
createClosureForHtmlPart(17, 3)
invokeTag('ifAnyGranted','sec',82,['roles':("ROLE_ADMIN")],3)
printHtmlPart(18)
})
invokeTag('ifLoggedIn','sec',83,[:],2)
printHtmlPart(15)
createTagBody(2, {->
printHtmlPart(19)
createClosureForHtmlPart(20, 3)
invokeTag('link','g',97,['uri':("/j_spring_security_logout")],3)
printHtmlPart(21)
})
invokeTag('ifLoggedIn','sec',101,[:],2)
printHtmlPart(22)
invokeTag('layoutBody','g',108,[:],-1)
printHtmlPart(9)
})
invokeTag('captureBody','sitemesh',109,[:],1)
printHtmlPart(23)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1485526022344L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
